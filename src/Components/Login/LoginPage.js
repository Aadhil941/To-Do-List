import React, { useEffect, useState } from "react";

import LoginForm from "./LoginForm";

function LoginPage() {

    return (
        <div>
            <div className={`form-block-wrapper form-block-wrapper--is-login`} ></div>
            <section className={`form-block form-block--is-login`}>
                <header className="form-block__header">
                    <h1>Welcome !</h1>
                    <div className="form-block__toggle-block">
                        <label htmlFor="form-toggler"></label>
                    </div>
                </header>
                <LoginForm />
            </section>
        </div>
    );
}

export default LoginPage;
