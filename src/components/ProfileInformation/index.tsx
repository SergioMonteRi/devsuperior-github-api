import { GithubResponse } from "../../types/githubResponse.type";
import FieldInformation from "./FieldInformation";

import "./styles.css";

type Props = {
  profileInformation: GithubResponse;
};

const ProfileInformation = (props: Props) => {
  return (
    <div className="profile-information-container">
      <img
        src={props.profileInformation.avatar_url}
        alt={props.profileInformation.name}
        className="avatar-image"
      />

      <div className="profile-content">
        <h3>Informações</h3>
        <FieldInformation
          informationContent={props.profileInformation.login}
          informationType="Perfil"
        />
        <FieldInformation
          informationContent={props.profileInformation.followers}
          informationType="Seguidores"
        />
        <FieldInformation
          informationContent={props.profileInformation.location}
          informationType="Localidade"
        />
        <FieldInformation
          informationContent={props.profileInformation.name}
          informationType="Nome"
        />
      </div>
    </div>
  );
};

export default ProfileInformation;
