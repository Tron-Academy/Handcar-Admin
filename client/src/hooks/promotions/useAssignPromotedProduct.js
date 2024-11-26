import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useAssignPromotedProduct = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const assignPromotedProduct = async ({ id }) => {
    setLoading(true);
    try {
      const res = await axios.patch("url");
      const data = res.data;
      toast.success("Product Successfully Promoted");
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, assignPromotedProduct };
};

export default useAssignPromotedProduct;
