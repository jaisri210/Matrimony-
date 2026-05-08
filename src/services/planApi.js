import API from "./axios";

export const getPlans = async () => {
  const res = await API.get("/plan");
  return res.data;
};

export const getMyPlan = async () => {
  const res = await API.get("/plan/me");
  return res.data;
};

export const upgradePlan = async () => {
  const res = await API.post("/plan/upgrade", {
    plan: "premium",
  });
  return res.data;
};
