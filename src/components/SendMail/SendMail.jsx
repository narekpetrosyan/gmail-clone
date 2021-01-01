import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { closeSendMail } from "../../store/mail/MailActions";
import { useDispatch } from "react-redux";
import { db } from "../../firebase";
import firebase from "firebase";

const SendMail = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (formData) => {
    db.collection("emails").add({
      to: formData.to,
      subject: formData.subject,
      message: formData.message,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    dispatch(closeSendMail());
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New message</h3>
        <CloseIcon
          onClick={() => dispatch(closeSendMail())}
          className="sendMail__close"
        />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          placeholder="To"
          type="email"
          ref={register({ required: true })}
        />
        {errors.to && <p className="sendMail__error">To is required</p>}
        <input
          name="subject"
          placeholder="Subject"
          type="text"
          ref={register}
        />
        <input
          name="message"
          ref={register({ required: true })}
          placeholder="Message"
          type="text"
          className="sendMail__message"
        />
        {errors.message && <p className="sendMail__error">To is required</p>}

        <div className="sendMail__options">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            className="sendMail__button"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
