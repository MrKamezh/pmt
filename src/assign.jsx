import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Navbar } from "./navbar";

export const Assign = () => {
  const [defaultLoad, setDefaultLogo] = useState(true);
  const [showTaskForm, setShowTaskForm] = useState(false);
  const [showProjectDetails, setProjectDetails] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [assignedProject, setAssignedProject] = useState([
    {
      id: 1,
      name: "Neighborhood Network",
      desc: "A Neighborhood Network serves as a platform for residents to come together, share information, and access services that improve their well-being. These networks often focus on building a sense of community, encouraging participation, and addressing local needs through collaboration. They can be formal organizations or informal groups, and they may operate in various settings, including urban, suburban, and rural areas.",
      due: "2025-05-14",
      emailAddresses: ["Goku@gmail.com", "Zoro@gmail.com"],
      features:
        "A Neighborhood Network features community engagement through events and volunteer opportunities, resource sharing that provides access to local services, and communication platforms like social media and newsletters to keep residents informed. It offers support services for vulnerable populations, health and wellness programs promoting healthy living, and safety initiatives in collaboration with local law enforcement. Additionally, it hosts cultural and educational activities to celebrate diversity, promotes sustainability efforts through environmentally friendly practices, and ultimately strengthens community bonds while enhancing the overall quality of life for residents.",
    },
    {
      id: 2,
      name: "Local Link",
      desc: "The Local Link Project is an initiative designed to strengthen community connections by linking residents with local resources, services, and opportunities. It aims to enhance social cohesion, promote economic development, and improve the overall quality of life within neighborhoods. The project often focuses on building relationships among residents, local businesses, and organizations to create a supportive and vibrant community ecosystem.",
      due: "2025-05-24",
      emailAddresses: ["Luffy@gmail.com"],
      features:
        "The Local Link Project features a comprehensive resource directory that connects residents with local services and businesses, organizes community events like farmers' markets and workshops to encourage participation, and facilitates networking opportunities among residents and local organizations. It promotes volunteer programs to foster community engagement, offers skill-building workshops for personal and professional development, and provides support for local businesses through marketing assistance and funding resources. Additionally, the project engages in community advocacy to address local issues, promotes sustainability initiatives such as recycling and community gardens, implements feedback mechanisms for residents to voice their needs, and collaborates with local organizations to enhance service delivery and resource availability.",
    },
  ]);

  const handleAddTaskClick = () => {
    setShowTaskForm(true);
    setDefaultLogo(false);
    setProjectDetails(false);
    setEditingProject(null);
    setSelectedProject(null);
  };

  const handleAssignedProject = (event) => {
    event.preventDefault();
    setDefaultLogo(true);
    const formElements = event.target.elements;
    const newProject = {
      id: assignedProject.length + 1,
      name: formElements.taskTitle.value,
      desc: formElements.taskDescription.value,
      features: formElements.taskFeatures.value,
      due: formElements.dueDate.value,
      emailAddresses: formElements.emailAddresses.value
        .split(",")
        .map((email) => email.trim()),
    };
    setAssignedProject([...assignedProject, newProject]);
    setShowTaskForm(false);
    setDefaultLogo(false);
    setSelectedProject(newProject);
    setProjectDetails(true);
  };

  const handleProjectClick = (project) => {
    setDefaultLogo(false);
    setShowTaskForm(false);
    setProjectDetails(true);
    setEditingProject(null);
    setSelectedProject(project);
  };

  const handleEditProject = (project) => {
    setEditingProject(project);
    setShowTaskForm(false);
    setProjectDetails(false);
    setDefaultLogo(false);
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    const formElements = event.target.elements;
    const updatedProject = {
      ...editingProject,
      name: formElements.taskTitle.value,
      desc: formElements.taskDescription.value,
      features: formElements.taskFeatures.value,
      due: formElements.dueDate.value,
      emailAddresses: formElements.emailAddresses.value
        .split(",")
        .map((email) => email.trim()),
    };

    setAssignedProject(
      assignedProject.map((project) =>
        project.id === editingProject.id ? updatedProject : project
      )
    );
    setEditingProject(null);
    setProjectDetails(true);
    setDefaultLogo(false);
    setSelectedProject(updatedProject);
  };

  return (
    <>
      <div className="fixed-top">
        <Navbar />
      </div>
      <div className="row" style={{ height: "100vh", marginTop: "6%" }}>
        {/* Left Sidebar */}
        <div
          className="bg-secondary col-12 col-md-3 p-3"
          style={{ minHeight: "max-content" }}
        >
          <div className="d-flex justify-content-center mt-4 mt-md-5">
            <button
              className="btn btn-outline-light btn-lg w-100"
              style={{ maxWidth: 250 }}
              onClick={handleAddTaskClick}
            >
              +
              <br />
              Add
            </button>
          </div>
          <ul className="list-group mt-3 p-3">
            {assignedProject.map((project) => (
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
          <div className="d-flex justify-content-center mt-4 mt-md-5">
            <Link to={"/admin"} className="w-100" style={{ maxWidth: 250 }}>
              <button className="btn btn-danger w-100">Dashboard</button>
            </Link>
          </div>
        </div>
        {/* Main Content */}
        <div className="p-4 bg-light col">
          {/* empty form */}
          {defaultLoad && (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ height: "70vh" }}
            >
              <h2 className="text-muted">Select a project to view details</h2>
            </div>
          )}

          {/* Task Form */}
          {showTaskForm && (
            <div className="p-4">
              <h4>Add New Task</h4>
              <form onSubmit={handleAssignedProject}>
                <div className="mb-3">
                  <label htmlFor="taskTitle" className="form-label">
                    Task Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="taskTitle"
                    placeholder="Enter task title"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="taskDescription" className="form-label">
                    Task Description
                  </label>
                  <textarea
                    className="form-control"
                    id="taskDescription"
                    rows="3"
                    placeholder="Enter task description"
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="taskFeatures" className="form-label">
                    Features
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="taskFeatures"
                    placeholder="Enter task features"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="dueDate" className="form-label">
                    Due Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="dueDate"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="emailAddresses"
                    className="form-label"
                    name="userEmail"
                  >
                    Email Addresses
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="emailAddresses"
                    placeholder="Enter email addresses separated by commas"
                    required
                  />
                </div>
                <div className="mt-5">
                  <button type="submit" className="btn btn-danger">
                    Add
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Edit Form */}
          {editingProject && (
            <div className="p-4">
              <h4>Edit Project</h4>
              <form onSubmit={handleEditSubmit}>
                <div className="mb-3">
                  <label htmlFor="taskTitle" className="form-label">
                    Task Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="taskTitle"
                    defaultValue={editingProject.name}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="taskDescription" className="form-label">
                    Task Description
                  </label>
                  <textarea
                    className="form-control"
                    id="taskDescription"
                    rows="3"
                    defaultValue={editingProject.desc}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="taskFeatures" className="form-label">
                    Features
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="taskFeatures"
                    defaultValue={editingProject.features}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="dueDate" className="form-label">
                    Due Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="dueDate"
                    defaultValue={editingProject.due}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="emailAddresses" className="form-label">
                    Email Addresses
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="emailAddresses"
                    defaultValue={editingProject.emailAddresses.join(", ")}
                  />
                </div>
                <button type="submit" className="btn btn-danger">
                  Commit Changes
                </button>
              </form>
            </div>
          )}

          {/* Project Details */}
          {showProjectDetails && selectedProject && (
            <div className="p-5 card shadow">
              <h3>{selectedProject.name}</h3>
              <h5 className="mt-3">Description</h5>
              <p className="mt-3">{selectedProject.desc}</p>
              <h5 className="mt-3">Features</h5>
              <p className="mt-3">{selectedProject.features}</p>
              <p className="mt-3">
                <b>Due:</b> {selectedProject.due}
              </p>
              <h5 className="mt-3">Email Addresses</h5>
              <ul>
                {selectedProject.emailAddresses.map((email, idx) => (
                  <li key={idx}>{email}</li>
                ))}
              </ul>
              <button
                className="btn btn-danger mt-3"
                onClick={() => handleEditProject(selectedProject)}
              >
                Edit
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
