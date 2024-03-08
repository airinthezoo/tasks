import React, { useState } from "react";
import Form from "react-bootstrap/Form"; // Assuming use of React Bootstrap for the switch

export function EditMode(): JSX.Element {
    const [isEditMode, setIsEditMode] = useState(false);
    const [name, setName] = useState("Your Name");
    const [isStudent, setIsStudent] = useState(true);

    const toggleEditMode = () => setIsEditMode(!isEditMode);
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setName(event.target.value);
    const handleStudentChange = (event: React.ChangeEvent<HTMLInputElement>) =>
        setIsStudent(event.target.checked);

    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Check
                type="switch"
                id="edit-mode-switch"
                label="Edit Mode"
                checked={isEditMode}
                onChange={toggleEditMode}
            />
            {isEditMode ? (
                <div>
                    <Form.Group>
                        <Form.Label>Name:</Form.Label>
                        <Form.Control
                            type="text"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-checkbox"
                        label="Student"
                        checked={isStudent}
                        onChange={handleStudentChange}
                    />
                </div>
            ) : (
                <p>
                    {name} is {isStudent ? "" : "not "}a student.
                </p>
            )}
        </div>
    );
}
