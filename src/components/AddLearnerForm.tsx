function AddLearnerForm() {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "20px",
        borderRadius: "8px",
        backgroundColor: "white",
        marginBottom: "20px",
      }}
    >
      <h2>Add Learner</h2>

      <input
        type="text"
        placeholder="Admission Number"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          boxSizing: "border-box",
        }}
      />

      <input
        type="text"
        placeholder="Full Name"
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
          boxSizing: "border-box",
        }}
      />

      <select
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "10px",
        }}
      >
        <option>Male</option>
        <option>Female</option>
      </select>

      <select
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
        }}
      >
        <option>Select Class</option>
      </select>

      <button
        style={{
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Save Learner
      </button>
    </div>
  );
}

export default AddLearnerForm;
