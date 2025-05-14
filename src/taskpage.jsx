import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./navbar";
import { useNavigate } from "react-router-dom";

// Chatpage component now receives a unique chat state per project
const Chatpage = ({ messages, onSend }) => {
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    onSend({ from: "You", text: input });
    setInput("");
  };

  return (
    <div className="container-fluid vh-50 bg-light d-flex p-0">
      <div className="flex-grow-1 d-flex flex-column bg-white border-start">
        <div className="flex-grow-1 overflow-auto p-3 bg-light">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`d-flex mb-2 ${
                msg.from === "You"
                  ? "justify-content-end"
                  : "justify-content-start"
              }`}
            >
              <div
                className={`p-2 px-3 rounded-4 shadow-sm ${
                  msg.from === "You" ? "bg-success bg-opacity-25" : "bg-white"
                }`}
                style={{ maxWidth: "60%" }}
              >
                <div className="fw-bold small mb-1">{msg.from}</div>
                {msg.text}
              </div>
            </div>
          ))}
        </div>
        <form
          onSubmit={handleSend}
          className="d-flex p-3 bg-body-tertiary border-top"
        >
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="form-control rounded-pill me-2"
          />
          <button
            type="submit"
            className="btn btn-success rounded-pill fw-bold"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export const TaskPage = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Community Connector.",
      email: ["1@gmail.com", "2@gmail.com", "3@gmail.com"],
      details:
        "A Community Connector is a role that focuses on building and strengthening connections within a community, often with the goal of improving health, well-being, or addressing specific needs. They act as a link between individuals and community resources, helping people access services, support, and opportunities that can positively impact their lives.",
      receivedFile: [
        {
          lastModified: 1746693448157,
          name: "J2task7(1) (1).java",
          size: 269,
          type: "",
          url: "blob:http://localhost:5173/7088484e-3a73-4c32-b008-5a976ab7d046",
        },
        {
          lastModified: 1746693448157,
          name: "J2task7(1) (1).java",
          size: 269,
          type: "",
          url: "blob:http://localhost:5173/7088484e-3a73-4c32-b008-5a976ab7d046",
        },
      ],
    },
    {
      id: 2,
      name: "Local Link",
      email: ["1@gmail.com", "2@gmail.com", "3@gmail.com"],
      details: "The Local Link Project is an initiative designed to strengthen community connections by linking residents with local resources, services, and opportunities. It aims to enhance social cohesion, promote economic development, and improve the overall quality of life within neighborhoods. The project often focuses on building relationships among residents, local businesses, and organizations to create a supportive and vibrant community ecosystem.",
      receivedFile: [],
    },
     
  ]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [openChat, setOpenChat] = useState(false);

  // Store chat messages per project id
  const [projectChats, setProjectChats] = useState({
    1: [
      { from: "user1", text: "Hi there!" },
      { from: "user2", text: "Hello Alice!" },
    ],
    2: [{ from: "user1", text: "Welcome to Project Y chat!" }],
  });

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setOpenChat(false); // Optionally close chat when switching projects
  };


  const uploadfile = (event) => {
    event.preventDefault();
    if (!selectedProject) return;
    const fileInput = document.getElementById("fileUpload");
    const file = fileInput.files[0];
    if (file) {
      setProjects((prevProjects) =>
        prevProjects.map((project) =>
          project.id === selectedProject.id
            ? {
                ...project,
                receivedFile: [
                  ...project.receivedFile,
                  {
                    name: file.name,
                    size: file.size,
                    type: file.type,
                    lastModified: file.lastModified,
                    url: URL.createObjectURL(file),
                  },
                ],
              }
            : project
        )
      );
    } else {
      alert("No file selected.");
    }
  };

  const navigate = useNavigate();

  const onDiscuss = () => {
    setOpenChat(true);
  };

  const closeChat = () =>{
    setOpenChat(false);
  }

  const handleSendMessage = (msg) => {
    if (!selectedProject) return;
    setProjectChats((prev) => ({
      ...prev,
      [selectedProject.id]: [...(prev[selectedProject.id] || []), msg],
    }));
  };

  const currentProject = selectedProject
    ? projects.find((p) => p.id === selectedProject.id)
    : null;

  return (
    <div className="container-fluid">
      <div className="fixed-top">
        <Navbar />
      </div>
      <div className="row" style={{ height: "100vh", marginTop: "6%" }}>
        <div className="col-12 col-md-3 p-3 bg-secondary text-white"
             style={{ minHeight: "max-content" }}
        >
          <h5>Assigned Tasks</h5>
          <ul className="list-group mt-3">
            {projects.map((project) => (
              <div key={project.id} className="mt-3 p-2 rounded card shadow">
                <li
                  className="list-group-item list-group-item-action"
                  onClick={() => handleProjectClick(project)}
                  style={{ cursor: "pointer" }}
                >
                  {project.name}
                </li>
              </div>
            ))}
          </ul>
        </div>
        <div className="col p-3">
          <div className="card shadow p-5">
            {currentProject ? (
              <>
                <h3>{currentProject.name}</h3>
                <h5 className="mt-3">Description</h5>
                <p className="mt-3">{currentProject.details}</p>
                <button className="btn btn-danger fw-bold" onClick={onDiscuss}>
                  Discuss
                </button>
                <div className="mt-5">
                  <h5>Upload Files</h5>
                  <form>
                    <div className="mb-3">
                      <input
                        type="file"
                        className="form-control"
                        id="fileUpload"
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-danger"
                      onClick={uploadfile}
                    >
                      Upload
                    </button>
                  </form>
                </div>
                <div className="m-5 card shadow p-4">
                  <h5>Files</h5>
                  {currentProject.receivedFile.length > 0 ? (
                    <ul className="list-group">
                      {currentProject.receivedFile.map((file, index) => (
                        <li key={index} className="list-group-item">
                          <a
                            href={file.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {file.name}
                          </a>{" "}
                          ({(file.size / 1024).toFixed(2)} KB)
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>No files uploaded yet.</p>
                  )}
                </div>
                {openChat && (
                <>
                  <Chatpage
                    messages={projectChats[currentProject.id] || []}
                    onSend={handleSendMessage}
                  />
                  <button className="btn btn-danger" onClick={closeChat}>Close</button>
                </>
                )}
              </>
            ) : (
              <h5>Select a project to view details</h5>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
