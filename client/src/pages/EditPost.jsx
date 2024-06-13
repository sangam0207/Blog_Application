import { useState } from "react";
import ReactQuill from "react-quill";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { app } from "../firebase";
import useMutate from "../hooks/useMutation";
import { toast } from 'sonner';
import { useApi } from "../services/post.api";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [imageFile, setImageFile] = useState(null);
  const [uploadTracValue, setUploadTracValue] = useState(null);
  const [imageFileUrl, setImageFileUrl] = useState(null);
const{createPost}=useApi()
const navigate=useNavigate()
  const { mutate: createPostMutate, isLoading } = useMutate(createPost, {
    onSuccess: (response) => {
      toast.success("Post created successfully!");
    },
    onError: (error) => {
      toast.error("Failed to create post");
    }
  });

  const upLoadImage = async () => {
    console.log("Uploading Image.............");
    const storage = getStorage(app);
    const fileName = new Date().getTime() + imageFile.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setUploadTracValue(Math.round(progress));
      },
      (error) => {
        console.error("File upload error:", error);
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((downloadURL) => setImageFileUrl(downloadURL))
          .catch((error) => {
            console.error("Error getting download URL:", error);
          });
      }
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const postData = { ...formData, image: imageFileUrl };
    createPostMutate(postData);
navigate('/blogs')
  };

  const handleTitleChange = (e) => {
    setFormData({ ...formData, title: e.target.value });
  };

  const handleContentChange = (value) => {
    setFormData({ ...formData, content: value });
  };

  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  return (
    <div className="p-2 max-w-3xl mx-auto min-h-screen">
      <h1 className="text-center text-3xl my-12 font-semibold">Edit this post</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 sm:flex-row justify-between">
          <input
            type="text"
            placeholder="Title"
            required
            id="title"
            className="flex-1 border border-gray-300 p-2 rounded-md"
            value={formData.title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="flex gap-4 items-center justify-between border-4 border-teal-500 border-dotted p-3">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />

          <button
            type="button"
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md"
            onClick={upLoadImage}
            disabled={isLoading}
          >
            {isLoading ? 'Uploading Image...' : 'Upload Image'}
          </button>
        </div>
        {uploadTracValue && uploadTracValue > 0 && uploadTracValue < 100 ? (
          <p className="text-center text-blue-500">
            Uploading.......{uploadTracValue}%
          </p>
        ) : uploadTracValue === 100 ? (
          <p className="text-center text-green-600">
            Image uploaded Successfully
          </p>
        ) : null}
        {imageFileUrl && (
          <img
            src={imageFileUrl}
            alt="Uploaded Image"
            className="h-96 object-contain object-center"
          />
        )}

        <ReactQuill
          theme="snow"
          placeholder="Write something..."
          className="h-72 mb-12"
          value={formData.content}
          onChange={handleContentChange}
        />
        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-md"
          disabled={isLoading}
        >
          {isLoading ? 'Updating...' : 'Save'}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
