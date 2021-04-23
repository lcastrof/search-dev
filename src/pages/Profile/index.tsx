import { formatDistanceToNow } from "date-fns";
import { PacmanLoader, PropagateLoader } from "react-spinners";

import { useEffect, useState } from "react";
import { FiHeart, FiStar, FiTwitter, FiUsers } from "react-icons/fi";
import { HiOutlineLink, HiOutlineLocationMarker, HiOutlineMail, HiOutlineOfficeBuilding } from "react-icons/hi";
import { useHistory, useParams } from "react-router";
import { api } from "../../services/api";

import { 
  Container, 
  DeveloperCard, 
  DeveloperInfo,
  DeveloperName,
  DeveloperDescription,
  DeveloperSocial,
  DeveloperLinks,
  DeveloperLink,
  Repositories,
  Repository,
  RepositoryDetails,
  Separator,
  LoadingContainer
} from "./styles";

interface ProfileParams {
  name: string;
}

interface UserInfo {
  avatar_url: string;
  name: string;
  location?: string;
  email?: string;
  bio?: string;
  company?: string;
  blog?: string;
  twitter_username?: string;
  following: number;
  followers: number;
}

interface Repo {
  name: string;
  description: string;
  stargazers_count: number;
  updated_at: string;
  html_url: string;
}

export function Profile() {
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({} as UserInfo);
  const [userStars, setUserStars] = useState([]);
  const [userRepos, setUserRepos] = useState([] as Repo[]);

  const { push } = useHistory();
  const params = useParams<ProfileParams>();

  function formatUpdatedAt(date: string) {
    const updatedDate = new Date(date);
    
    return formatDistanceToNow(updatedDate);
  }

  useEffect(() => {
    async function loadUser() {
      setIsLoading(true);
      try {
        const userInfoResponse = await api.get(`${params.name}`);
        const userReposResponse = await api.get(`${params.name}/repos`);
        const userStarsResponse = await api.get(`${params.name}/starred`);
  
        const formattedRepos = userReposResponse.data.map((repo: Repo) => {
          return {
            name: repo.name,
            description: repo.description,
            stargazers_count: repo.stargazers_count,
            html_url: repo.html_url,
            updated_at: formatUpdatedAt(repo.updated_at)
          };
        });
  
        setUserInfo(userInfoResponse.data);
        setUserRepos(formattedRepos);
        setUserStars(userStarsResponse.data);
  
        setIsLoading(false);
      } catch(err) {
        console.log(err);
        setIsLoading(false);
      }
    }

    loadUser();
  }, [params.name]);

  return(
    <Container>
      <DeveloperCard>
        <div>
          {isLoading ? (
            <PacmanLoader color="yellow" />
          ) : (
             <>
               <img src={userInfo.avatar_url} alt={userInfo.name}/>
               <DeveloperInfo>
                 <DeveloperName>
                   <h1>{userInfo.name}</h1>
                   <h2>@{params.name}</h2>
                 </DeveloperName>
                 <DeveloperDescription>
                   <p>{userInfo.bio}</p>
                 </DeveloperDescription>
                 <DeveloperSocial>
                   <div>
                     <FiUsers />
                     <span>{userInfo.followers} followers</span>
                   </div>
                   <div>
                     <FiHeart />
                     <span>{userInfo.following} following</span>
                   </div>
               
                   <div>
                     <FiStar />
                     <span>{userStars.length} stars</span>
                   </div>
                 </DeveloperSocial>
               </DeveloperInfo>
               <DeveloperLinks>
                 { userInfo.company && (
                   <DeveloperLink>
                     <HiOutlineOfficeBuilding />
                     <span>Organization</span>
                   </DeveloperLink>
                 )}
               
                 { userInfo.location && (
                   <DeveloperLink>
                     <HiOutlineLocationMarker />
                     <span>{userInfo.location}</span>
                   </DeveloperLink>
                 )}
               
                 { userInfo.email && (
                   <DeveloperLink>
                     <HiOutlineMail />
                     <span>{userInfo.email}</span>
                   </DeveloperLink>
                 )}
               
                 { userInfo.blog && (
                   <DeveloperLink>
                     <HiOutlineLink />
                     <a href={userInfo.blog} target="_blank" rel="noopener noreferrer">
                       {userInfo.blog}
                     </a>
                   </DeveloperLink>
                 )}
               
                 { userInfo.twitter_username && (
                   <DeveloperLink>
                     <FiTwitter />
                     <a href={`https://twitter.com/${userInfo.twitter_username}`} target="_blank" rel="noopener noreferrer">
                       @{userInfo.twitter_username}
                     </a>
                   </DeveloperLink>
                 )}
               </DeveloperLinks>
             </>
          )}
         
        </div>

        <button type="button" onClick={() => push('/')}>Voltar</button>
      </DeveloperCard>

      <Repositories>
        { isLoading ? (
          <LoadingContainer>
            <PropagateLoader color="#36D7B7" />
          </LoadingContainer>
        ) : userRepos.map(repo => {
            return(
              <div key={repo.name}>
                <Repository>
                  <a href={repo.html_url} target="_blank" rel="noopener noreferrer">{repo.name}</a>
                  { repo.description && <p>{repo.description}</p>}
                  <RepositoryDetails>
                    <FiStar />
                    <span>{repo.stargazers_count} stars</span>
                    <span>Updated {repo.updated_at} ago</span>
                  </RepositoryDetails>
                </Repository>
  
                <Separator />
              </div>
            );
          }) 
         }
      </Repositories>
    </Container>
  );
}