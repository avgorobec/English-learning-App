import React from "react";
import { MDBNotification } from "mdbreact";
import './Notification.scss';

export default function Notification(props) {
        return (
            <MDBNotification className="notification"
                autohide={3000}
                show
                fade
                iconClassName="text-primary"
                title="Уведомление"
                message={props.errMessage}
            />
        );
}