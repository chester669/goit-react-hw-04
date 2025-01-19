import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import ErrorMsg from "./components/ErrorMsg/ErrorMsg";
import ImageModal from "./components/ImageModal/ImageModal";
import axios from "axios";
import "./App.css";

const UNSPLASH_API_KEY = "0L6xBqQv6WXCrQvrT8nWOztbkCh3VMM34N0wNA2WiBM";

function App() {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchImages = async (searchQuery, currentPage = 1) => {
    if (!searchQuery.trim()) {
      setError("Please enter a search term.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        "https://api.unsplash.com/search/photos",
        {
          params: {
            query: searchQuery,
            page: currentPage,
            per_page: 12,
          },
          headers: {
            Authorization: `Client-ID ${UNSPLASH_API_KEY}`,
          },
        }
      );

      const newImages = response.data.results;
      setImages((prevImages) =>
        currentPage === 1 ? newImages : [...prevImages, ...newImages]
      );
    } catch (err) {
      setError("Error fetching images. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (searchQuery) => {
    if (query === searchQuery) return;
    setQuery(searchQuery);
    setPage(1);
  };

  const loadMoreImages = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    if (query) {
      fetchImages(query, page);
    }
  }, [query, page]);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="App">
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMsg message={error} />}
      <ImageGallery images={images} onImageClick={openModal} />
      {loading && <Loader />}
      {images.length > 0 && !loading && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}
      {selectedImage && (
        <ImageModal image={selectedImage} onClose={closeModal} />
      )}
    </div>
  );
}

export default App;
