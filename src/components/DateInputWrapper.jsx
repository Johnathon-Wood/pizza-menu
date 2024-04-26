import React from "react";
import { useState } from "react";
import { DateInput } from "@va-bip/bip-ui-components";

export default function DateInputWrapper() {
  const [value, setValue] = useState("");
  const handleChange = (v) => {
    setValue(v);
  };
  return (
    <div
      style={{
        paddingBottom: "120px",
        display: "flex",
        alignItems: "center",
        height: "50%",
        width: "100%",
        border: "thick double #32a1ce;"
      }}
    >
      <DateInput
        id="calendarId"
        withCalendar
        dateFormat="MM/dd/yyyy"
        required
        label="Label (mm/dd/yyyy)"
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
}
