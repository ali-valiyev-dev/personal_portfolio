import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import supabase from "../api/supabaseClient";

const useFetchData = (tableName, selectColumns, hasLanguageColumn = true) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { lang = "en" } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      try {
        let query = supabase.from(tableName).select(selectColumns);

        if (hasLanguageColumn) {
          query = query.eq("language", lang);
        }

        const { data, error } = await query;

        if (error) throw error;
        setData(data);
      } catch (error) {
        setError(error);
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [tableName, selectColumns, lang, hasLanguageColumn]);

  return { data, error, loading };
};

export default useFetchData;
