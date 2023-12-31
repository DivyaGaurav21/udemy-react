import { useEffect, useState } from "react";
import { postData } from "./components/staticData";
import Header from "./components/Header";
import Main from "./components/Main";
import Archive from "./components/Archive";



function App() {

  const [posts, setPosts] = useState(postData);
  // console.log(posts);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFakeDark, setIsFakeDark] = useState(false);

  // Derived state. These are the posts that will actually be displayed
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
        `${post.title} ${post.body}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      )
      : posts;

  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  function handleClearPosts() {
    setPosts([]);
  }
  useEffect(
    function () {
      document.documentElement.classList.toggle("fake-dark-mode");
    },
    [isFakeDark]
  );

  return (
      <section>
        <button
          onClick={() => setIsFakeDark((isFakeDark) => !isFakeDark)}
          className="btn-fake-dark-mode"
        >
          {isFakeDark ? "☀️" : "🌙"}
        </button>
        <Header
          posts={searchedPosts}
          onClearPosts={handleClearPosts}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <Main posts={searchedPosts} onAddPost={handleAddPost} />
        <Archive onAddPost={handleAddPost} />

    </section>
  );
}


export default App;
