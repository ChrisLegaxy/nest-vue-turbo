import { useUserStore } from "@/stores/user";

export const authGuard = async(to, from, next) => {
  const userStore = useUserStore();

  if (!userStore.isAuthenticated) {
    const token = userStore.accessToken;
    if (token) {
      try {
        await userStore.getCurrentUser();
        return next("/");
      }
      catch (error) {
        next("/login");
      }
    }
    else {
      next("/login");
    }
  }
  else {
    next();
  }
};
