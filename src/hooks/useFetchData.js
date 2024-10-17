import { useState, useEffect } from "react";
import supabase from "../api/supabaseClient";

const useFetchData = (tableName, selectColumns) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from(tableName)
        .select(selectColumns);
      if (error) {
        setError(error);
        console.error("Error fetching data:", error);
      } else {
        setData(data);
      }
    };

    fetchData();
  }, [tableName, selectColumns]);

  return { data, error };
};

export default useFetchData;
