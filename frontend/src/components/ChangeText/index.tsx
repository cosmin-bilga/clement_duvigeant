/* UTILISER TIPTAP ET DOMPURIFY */

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";

export default function ChangeText({ location, id = null }) {
  const [content, setContent] = useState("");

  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  const submitContent = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("location", location);
    formData.append("content", content);
    if (id) formData.append("id", id);
    else {
      formData.append("id", "-1");
    }

    try {
      const response = await fetch(
        "http://localhost/clement_duvigeant/backend/content/",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: formData,
        },
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Upload failed");
      }

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!editor) {
    return null;
  }

  return (
    <form onSubmit={submitContent}>
      <div>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          Bold
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          Italic
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          Heading
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
        >
          Heading 2
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          List
        </button>
      </div>

      <EditorContent editor={editor} />

      <button type="submit">Save</button>
    </form>
  );
}
