import { useContext } from "react";
import { CartContext } from "../../context/cartContext";
import SkeletonCard from "../skeleton_card/skeleton_card";
import styles from './styles.module.css';
import NotProfile from "../notProfile/notProfile";

const ProtectedRoute = ({ children }) => {
    const { profile, loading } = useContext(CartContext);

    if (!profile) {
        return (
            <NotProfile />
        );
    }

    if (loading) return <div className={styles.itemListContainer}><SkeletonCard /></div>;

    if (!profile || (profile.role !== "admin" && profile.role !== "premium")) {
        return <NotProfile />;
    }

    return children;
};

export default ProtectedRoute;
