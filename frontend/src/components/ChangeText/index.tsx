/* UTILISER TIPTAP ET DOMPURIFY */
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { useState, useEffect } from "react";
import "./changetext.css";

export default function ChangeText({ location, placeholder = "", id = null }) {
  const [content, setContent] = useState("");

  const editor = useEditor({
    extensions: [StarterKit],
    content: placeholder,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && placeholder) {
      editor.commands.setContent(placeholder);
    }
  }, [editor, placeholder]);

  const submitContent = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("location", location);
    formData.append("content", content);
    if (id) formData.append("id", id);
    else formData.append("id", "-1");

    // console.log(formData);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/content/`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Upload failed");
      }

      //console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!editor) {
    return null;
  }

  return (
    <form onSubmit={submitContent} className="text-editor">
      <div>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          Gras
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          Italique
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
        >
          Titre 1
        </button>

        <button
          type="button"
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
        >
          Titre 2
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          Liste
        </button>
      </div>

      <EditorContent editor={editor} />

      <button type="submit">Enregistrer</button>
    </form>
  );
}
