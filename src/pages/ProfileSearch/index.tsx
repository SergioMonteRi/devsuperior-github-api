import axios from "axios";
import { useState } from "react";
import ProfileInformation from "../../components/ProfileInformation";
import ProfileLoader from "../../components/ProfileInformation/ProfileLoader";
import { GithubResponse } from "../../types/githubResponse.type";
import "./styles.css";

type FormData = {
  githubUser: string;
};

const ProfileSearch = () => {
  const [formData, setFormData] = useState<FormData>({ githubUser: "" });
  const [githubProfile, setGithubProfile] = useState<GithubResponse>();
  const [isLoading, setIsloading] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const name = event.target.name;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsloading(true);
    setGithubProfile(undefined);

    axios
      .get(`https://api.github.com/users/${formData.githubUser}`)
      .then((response) => {
        setGithubProfile(response.data);
      })
      .catch((error) => {
        setGithubProfile(undefined);
        console.error(error);
      })
      .finally(() => {
        setIsloading(false);
      });
  };

  return (
    <div className="profile-search-container">
      <div className="profile-form-container">
        <h1>Encontre um perfil Github</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              type="text"
              value={formData.githubUser}
              name="githubUser"
              placeholder="Usuário Github"
              className="search-input"
              onChange={handleChange}
            />
            <button
              type="submit"
              className="btn btn-primary text-secondary search-button"
            >
              Encontrar
            </button>
          </div>
        </form>
      </div>

      {isLoading && <ProfileLoader />}

      {githubProfile && (
        <ProfileInformation profileInformation={githubProfile} />
      )}
    </div>
  );
};

export default ProfileSearch;
