import "./styles.css";

const ProfileSearch = () => {
  return (
    <div className="profile-search-container">
      <h1>Encontre um perfil Github</h1>
      <form>
        <div className="form-container">
          <input
            type="text"
            name=""
            id=""
            placeholder="Usuário Github"
            className="search-input"
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
  );
};

export default ProfileSearch;
