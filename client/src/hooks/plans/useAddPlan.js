import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useAddPlan = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const addPlan = async ({ name, type, duration, price, description }) => {
    setLoading(true);
    try {
      const res = await axios.post("url", {
        name,
        type,
        duration,
        price,
        description,
      });
      const data = res.data;
      toast.success("Plan added successfully");
      navigate("/plans");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, addPlan };
};

export default useAddPlan;
