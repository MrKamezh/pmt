import React from "react";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import { useNavigate } from "react-router-dom";

import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Navbar } from "./navbar";

ChartJS.register(
  LineElement,
  BarElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

export const Admin = () => {
  const projects = [
    { id: 1, name: "Website Redesign", status: "In Progress", manager: "Alice" },
    { id: 2, name: "Mobile App", status: "Completed", manager: "Bob" },
    { id: 3, name: "API Integration", status: "Pending", manager: "Charlie" },
  ];

  // Example data for charts
  const chartLabels = ["Jan", "Feb", "Mar", "Apr", "May"];
  const lineData = {
    labels: chartLabels,
    datasets: [
      {
        label: "Projects Created",
        data: [2, 4, 3, 5, 6],
        borderColor: "red",
        tension: 0.4,
      },
      {
        label: "Usage Time (hrs)",
        data: [1, 15, 12, 18, 10],
        borderColor: "blue",
        tension: 0.3,
      },
    ],
  };
  const lineOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      tooltip: { mode: "index", intersect: false },
    },
    scales: {
      y: { 
        beginAtZero: true,
        grid: { drawOnChartArea: true },
        title: { display: true, text: "Projects" }
      },
      x: {
        beginAtZero: true,
        grid: { drawOnChartArea: true },
        title: { display: true, text: "Usage Time (hrs)" },
      },
    },
  };

  const barData = {
    labels: chartLabels,
    datasets: [
      {
        label: "Projects Completed",
        data: [1, 2, 1, 3, 2],
        backgroundColor: "#388e3c",
      },
      {
        label: "No. of Users",
        data: [5, 8, 7, 10, 12],
        backgroundColor: "#fbc02d",
      },
    ],
  };

  // Doughnut chart for project status distribution
  const statusCounts = projects.reduce(
    (acc, p) => {
      acc[p.status] = (acc[p.status] || 0) + 1;
      return acc;
    },
    {}
  );
  console.log(statusCounts);
  const doughnutData = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        data: Object.values(statusCounts),
        backgroundColor: ["#e53935", "#388e3c", "#fbc02d"],
        borderWidth: 1,
        hoverOffset: 40,
      },
    ],
  };

  // Table for project list
  const renderProjectTable = () => (
    <table className="table table-striped table-bordered align-middle">
      <thead className="table-danger">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
          <th>Manager</th>
        </tr>
      </thead>
      <tbody>
        {projects.map((p) => (
          <tr key={p.id}>
            <td>{p.id}</td>
            <td>{p.name}</td>
            <td>
              <span
                className={`badge ${
                  p.status === "Completed"
                    ? "bg-success"
                    : p.status === "In Progress"
                    ? "bg-warning text-dark"
                    : "bg-danger"
                }`}
              >
                {p.status}
              </span>
            </td>
            <td>{p.manager}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );

  // Quick stats
  const totalProjects = projects.length;
  const completed = projects.filter((p) => p.status === "Completed").length;
  const inProgress = projects.filter((p) => p.status === "In Progress").length;
  const pending = projects.filter((p) => p.status === "Pending").length;
  const totalUsageTime = 10 ; // sum of usage time
  const totalUsers = 5; // sum of users

  // Navbar items
  const navItems = [
    { label: "Dashboard", anchor: "dashboard", icon: "🏠" },
    { label: "Quick Stats", anchor: "quick-stats", icon: "⚡" },
    { label: "Project Trends", anchor: "project-trends", icon: "📈" },
    { label: "Project List", anchor: "project-list", icon: "📋" },
  ];

  const navigate = useNavigate();

  return (
    <div className="container-fluid min-vh-100 bg-light p-0">
      <div className="fixed-top">
        <Navbar />
      </div>
      <div className="row g-0" style={{marginTop:"5%"}}>
        {/* Left Navbar */}
        <nav className="col-2 bg-dark text-white min-vh-100 py-3">

          <ul className="nav mt-5">
            {navItems.map((item) => (
              <li className="nav-item mt-3" key={item.anchor}>
                <a
                  className="nav-link text-white d-flex align-items-center px-4 py-2"
                  href={`#${item.anchor}`}
                  style={{ fontSize: 17, fontWeight: 500 }}
                >
                  <span className="me-2" style={{ fontSize: 20 }}>
                    {item.icon}
                  </span>
                  {item.label}
                </a>
              </li>
              
            ))}
            <li className="col-2 text-center fixed-bottom p-4 fw-bold bg-danger" onClick={() => navigate('/replyfaq')}>FAQ ?!</li>
          </ul>
        </nav>
        {/* Main Content */}
        <div className="col-md-10 col-12" style={{marginTop:"5%"}}>
          <main className="container py-3">
            {/* Quick Stats */}
            <section id="quick-stats" className="row g-3 mb-4">
              {[
                {
                  value: totalProjects,
                  label: "Total Projects",
                  color: "danger",
                  icon: "📁",
                },
                {
                  value: completed,
                  label: "Completed",
                  color: "success",
                  icon: "✅",
                },
                {
                  value: pending,
                  label: "Pending",
                  color: "warning",
                  icon: "⏳",
                },
                {
                  value: inProgress,
                  label: "In Progress",
                  color: "primary",
                  icon: "🚧",
                },
                {
                  value: totalUsageTime,
                  label: "Total Usage Time (hrs)",
                  color: "primary",
                  icon: "⏱️",
                },
                {
                  value: totalUsers,
                  label: "No. of Users",
                  color: "warning",
                  icon: "👥",
                },
              ].map((stat) => (
                <div className="col-6 col-md-4 col-lg-2" key={stat.label}>
                  <div className={`card border-top border-${stat.color} shadow-sm`}>
                    <div className="card-body text-center">
                      <div className={`fs-3 fw-bold text-${stat.color} mb-1`}>
                        {stat.icon} {stat.value}
                      </div>
                      <div className="text-muted fw-medium small">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </section>
            {/* Project Trends */}
            <section id="project-trends" className="mb-4">
              <h2 className="text-danger mb-4 fw-bold fs-4">Project Trends</h2>
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <Line data={lineData} options={lineOptions} />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <Bar data={barData} />
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100">
                    <div className="card-body">
                      <Doughnut data={doughnutData} />
                      <div className="text-center mt-2 text-secondary fw-medium">
                        Project Status Distribution
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            {/* Project List */}
            <section id="project-list" className="mb-4">
              <h2 className="text-danger mb-3 fw-bold fs-4">Project List</h2>
              {renderProjectTable()}
            </section>
          </main>
          <footer className="bg-danger text-white text-center p-4 fw-medium fs-6">
            &copy; {new Date().getFullYear()} Project Management Tool
          </footer>
        </div>
      </div>
    </div>
  );
};
