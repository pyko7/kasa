import MainLayout from "../../components/Layouts/MainLayout";
import { Link } from "react-router-dom";
import "./ErrorPage.scss";

/**
 * @description Represents the error page component.
 * @returns {React.ReactNode} An ErrorPage element.
 */
const ErrorPage = () => {
  return (
    <MainLayout>
      <div className="error-container">
        <span className="title">404</span>
        <span className="subtitle">
          Oups! La page que vous demandez n'existe pas.
        </span>
        <Link to="/" className="link">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </MainLayout>
  );
};

export default ErrorPage;
