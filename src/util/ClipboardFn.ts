import { toast } from "react-toastify";

export const copyContent = async (link: string) => {
  try {
    await navigator.clipboard.writeText(link);
    toast.success("Playlist link copied.");
  } catch (err) {
    console.error("Failed to copy: ", err);
    toast.error("Failed to copy");
  }
};
