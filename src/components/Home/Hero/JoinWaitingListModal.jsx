import React, { useState } from "react";
import { motion } from "framer-motion";
import { sendEmail } from "../../../utils/emailUtils";
import { toast } from "react-toastify";
import { useAuth } from "../../../context/AuthContext";

const JoinWaitingListModal = ({ onClose, onSubmit }) => {
    const [email, setEmail] = useState("");
    const { loading, setLoading } = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            await sendEmail(email); // Call the utility function to send email
            toast.success("Email submitted successfully!");
            console.log("Email submitted:", email);
            onSubmit(email); // Handle successful submission
        } catch (error) {
            toast.error("Error submitting email. Please try again.");
            console.error("Error submitting email:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-8 fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-primary-secondary-dark dark:bg-gradient-primary-secondary p-6 rounded-2xl shadow-lg relative"
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-4 text-gray-300"
                >
                    &times;
                </button>
                <h2 className="text-contrast-dark/85 mt-4">
                    "Good things come to those who wait... Join our waitlist now!"
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4 mt-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="p-2 border font-light rounded-lg text-contrast"
                        required
                    />
                    <button
                        type="submit"
                        className="p-3 bg-primary dark:bg-secondary font-normal text-sm text-white rounded-lg hover:bg-primary-dark"
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "SUBMIT"}
                    </button>
                </form>
            </motion.div>
        </div>
    );
};

export default JoinWaitingListModal;