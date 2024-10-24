import { useState, useEffect } from "react";
import supabase from "../api/supabaseClient";

const useFetchMedia = (bucketName, fileName) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFile = async () => {
      setLoading(true);
      const filePath = fileName;

      try {
        const { data, error } = await supabase.storage
          .from(bucketName)
          .download(filePath);

        if (error) {
          setError(error.message);
        } else if (data) {
          const url = URL.createObjectURL(data);
          setImageSrc(url);
        }
      } catch (err) {
        setError("Error occurred:", err);
      } finally {
        setLoading(false);
      }
    };

    if (bucketName && fileName) {
      fetchFile();
    }
  }, [bucketName, fileName]);

  return { imageSrc, error, loading };
};

export default useFetchMedia;
