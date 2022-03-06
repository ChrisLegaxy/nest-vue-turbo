import { useUserStore } from "@/stores/user";

export const isAuthicatedGuard = async(to, from, next) => {
  const userStore = useUserStore();

  if (!userStore.isAuthenticated) {
    const token = userStore.accessToken;
    if (token) {
      try {
        await userStore.getCurrentUser();
        return next("/");
      }
      catch (error) {
        next();
      }
    }
    else {
      next();
    }
  }
  else {
    next("/");
  }
};
