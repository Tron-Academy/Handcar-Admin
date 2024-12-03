import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "../../constants";

const useGetSingleCategory = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState(null);

  const getSingleCategory = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${base_url}/edit_category/${id}/`);
      const data = res.data;
      setCategory(data);
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSingleCategory();
  }, []);
  return { loading, category };
};

export default useGetSingleCategory;
