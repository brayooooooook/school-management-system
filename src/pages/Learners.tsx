import { useEffect, useState } from "react";
import AdminLayout from "../layouts/AdminLayout";
import AddLearnerForm from "../components/AddLearnerForm";
import { getLearners } from "../services/learnersService";
import type { Learner } from "../types";

function Learners() {
  const [learners, setLearners] = useState<Learner[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    async function loadLearners() {
      try {
        const data = await getLearners();
        setLearners(data ?? []);
      } catch (error) {
        console.error(error);
        alert("Failed to load learners.");
      } finally {
        setLoading(false);
      }
    }

    loadLearners();
  }, []);

  return (
    <AdminLayout>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1>Learners</h1>

        <button
          onClick={() => setShowForm(!showForm)}
          style={{
            padding: "10px 16px",
            cursor: "pointer",
          }}
        >
          {showForm ? "Close Form" : "+ Add Learner"}
        </button>
      </div>

      {showForm && <AddLearnerForm />}

      <input
        type="text"
        placeholder="Search learners..."
        style={{
          width: "100%",
          padding: "10px",
          margin: "20px 0",
          boxSizing: "border-box",
        }}
      />

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          backgroundColor: "white",
        }}
      >
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>
              Admission No.
            </th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>
              Full Name
            </th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>
              Gender
            </th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td colSpan={4} style={{ textAlign: "center", padding: "20px" }}>
                Loading...
              </td>
            </tr>
          ) : learners.length === 0 ? (
            <tr>
              <td colSpan={4} style={{ textAlign: "center", padding: "20px" }}>
                No learners found.
              </td>
            </tr>
          ) : (
            learners.map((learner) => (
              <tr key={learner.id}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {learner.admission_no}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {learner.full_name}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {learner.gender}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  Edit | Delete
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </AdminLayout>
  );
}

export default Learners;
