
import { LoginStateProvider } from '../../manager_center/auth/login/LoginPageState';
import LoginPage from '../../manager_center/auth/login/LoginPage';
import { Navigate } from 'react-router-dom';

const HomePage = () => {
    const token = localStorage.getItem("tokens")
    return (
        token !=null ?<Navigate to="/app" replace />:<LoginStateProvider>
        <LoginPage />
    </LoginStateProvider>
)
}

export default HomePage