package it.massimo.cruddef.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

public class Auth {
    private String result;
    private String reason;

    @JsonIgnoreProperties(ignoreUnknown = true)
    private String userSessionId;

    public Auth() {
    }

    public Auth(String result, String reason) {
        this.result = result;
        this.reason = reason;
    }

    public Auth(String result, String reason, String userSessionId) {
        this.result = result;
        this.reason = reason;
        this.userSessionId = userSessionId;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public String getUserSessionId() {
        return userSessionId;
    }

    public void setUserSessionId(String userSessionId) {
        this.userSessionId = userSessionId;
    }

    // Aggiungi getStatus() per coerenza con il frontend
    public String getStatus() {
        return result;
    }

    // Aggiungi getMessage() per coerenza con il frontend
    public String getMessage() {
        return reason;
    }
}
