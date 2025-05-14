import React from "react";
import { Navbar } from "./navbar";

const FaqReplyList = () => {
  const [queries, setQueries] = React.useState([
    { email: "user1@example.com", question: "How do I reset my password?", reply: "" },
    { email: "user2@example.com", question: "Where can I see my projects?", reply: "" },
    { email: "user3@example.com", question: "Can I add more team members?", reply: "" }
  ]);

  const handleReplyChange = (index, value) => {
    const updated = [...queries];
    updated[index].reply = value;
    setQueries(updated);
  };

  const handleReply = (index) => {
    const { email, reply } = queries[index];
    if (reply.trim()) {
      console.log(`Reply to ${email}: ${reply}`);
      alert(`Reply sent to ${email}`);
      // Optionally clear reply field after sending
      // handleReplyChange(index, "");
    } else {
      alert("Please enter a reply.");
    }
  };

  return (
    <div>
      {queries.map((q, idx) => (
        <div key={q.email} className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">{q.email}</h5>
            <p className="card-text"><strong>Query:</strong> {q.question}</p>
            <textarea
              className="form-control mb-2"
              placeholder="Type your reply here..."
              value={q.reply}
              onChange={e => handleReplyChange(idx, e.target.value)}
            />
            <button className="btn btn-danger" onClick={() => handleReply(idx)}>
              Send Reply
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Replyfaq = () => (
  <>
    <div className="fixed-top">
      <Navbar />
    </div>
    <div className="container" style={{marginTop:"7%"}}>
      <h2>User Queries</h2>
      <FaqReplyList />
    </div>
  </>
);