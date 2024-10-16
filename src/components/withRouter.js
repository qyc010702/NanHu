import { useNavigate } from 'react-router-dom';

// 包装 useNavigate 使其能在类组件中使用
export const withRouter = (Component) => {
    function Wrapper(props) {
        const navigate = useNavigate();
        return <Component navigate={navigate} {...props} />;
    }
    return Wrapper;
};
