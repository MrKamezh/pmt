import { Navbar } from "./navbar";

export const Faq = () => {
  return (
    <>
      <div className="fixed-top">
        <Navbar />
      </div>
      <div className="container mt-5">
        <h2 className="mb-4">Frequently Asked Questions</h2>
        <div className="list-group">
          {[
            {
              question: "What is this Project Management Tool?",
              answer:
                "This tool helps you plan, track, and manage your projects efficiently with features like task assignment, progress tracking, and collaboration. It is designed for teams of all sizes and supports multiple projects simultaneously.",
            },
            {
              question: "How do I create a new project?",
              answer:
                'Go to the dashboard and click on the "New Project" button. Fill in the project details and save to start managing your new project. You can also invite team members and set deadlines during project creation.',
            },
            {
              question: "Can I assign tasks to team members?",
              answer:
                "Yes, you can assign tasks to team members while creating or editing a task. Team members will be notified of their assignments. You can also reassign tasks at any time and track who is responsible for each task.",
            },
            {
              question: "How do I track project progress?",
              answer:
                "Use the dashboard and project views to monitor task completion, deadlines, and overall project status in real-time. Visual indicators and progress bars help you quickly assess project health.",
            },
            {
              question: "Is there a way to communicate with my team?",
              answer:
                "Yes, the tool includes a built-in messaging feature for team discussions and task-specific comments. You can also receive notifications for important updates.",
            },
            {
              question: "Can I integrate this tool with other apps?",
              answer:
                "Integration with popular tools like Slack, Google Calendar, and Trello is supported. Visit the integrations section in settings to connect your accounts.",
            },
            {
              question: "How secure is my project data?",
              answer:
                "All data is encrypted in transit and at rest. We use industry-standard security practices to protect your information and regularly update our systems.",
            },
          ].map((faq, idx) => (
            <div key={idx} className="list-group-item faq-card mt-5 card shadow">
              <h5 className="text-danger">{faq.question}</h5>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="card mt-4 p-4 mb-5 card shadow">
          <h5 className="mb-3 text-danger">I have more questions. Where can I get help?</h5>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(
                "Thank you for your question! Our team will get back to you soon."
              );
              e.target.reset();
            }}
          >
            <div className="mb-3">
              <label htmlFor="faqQuery" className="form-label">
                Ask your question
              </label>
              <input
                type="text"
                className="form-control"
                id="faqQuery"
                name="faqQuery"
                placeholder="Type your question here..."
                required
              />
            </div>
            <button type="submit" className="btn btn-danger">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
