const getBodyContent = () => {
	const content = `
        <div id="wrapper">
            <header>
                <h1 class="sr-only">Four card feature section</h1>
            </header>

            <main>
                <div class="container">
                    <section class="section">
                        <div class="section__head">
                            <h2 class="section__title">
                                Reliable, efficient delivery
                            </h2>
                            <p class="section__subtitle">
                                <strong>Powered by Technology</strong>
                            </p>
                            <p class="section__desc">
                                Our Artificial Intelligence powered tools use
                                millions of project data points to ensure that your
                                project is successful
                            </p>
                        </div>
                        <div class="section__body">
                            <div class="card__list">
                                <div class="card__list-block">
                                    <div
                                        class="card__list-item card__list-item--supervisor">
                                        <h3 class="card__title">Supervisor</h3>
                                        <p class="card__desc">
                                            Monitors activity to identify project
                                            roadblocks
                                        </p>
                                        <div class="card__image">
                                            <img
                                                width="64"
                                                height="64"
                                                src="./images/icons/supervisor.svg"
                                                alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="card__list-block">
                                    <div
                                        class="card__list-item card__list-item--team-builder">
                                        <h3 class="card__title">Team Builder</h3>
                                        <p class="card__desc">
                                            Scans our talent network to create the
                                            optimal team for your project
                                        </p>
                                        <div class="card__image">
                                            <img
                                                width="64"
                                                height="64"
                                                src="./images/icons/team-builder.svg"
                                                alt="" />
                                        </div>
                                    </div>
                                    <div
                                        class="card__list-item card__list-item--karma">
                                        <h3 class="card__title">Karma</h3>
                                        <p class="card__desc">
                                            Regularly evaluates our talent to ensure
                                            quality
                                        </p>
                                        <div class="card__image">
                                            <img
                                                width="64"
                                                height="64"
                                                src="./images/icons/karma.svg"
                                                alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div class="card__list-block">
                                    <div
                                        class="card__list-item card__list-item--calculator">
                                        <h3 class="card__title">Calculator</h3>
                                        <p class="card__desc">
                                            Uses data from past projects to provide
                                            better delivery estimates
                                        </p>
                                        <div class="card__image">
                                            <img
                                                width="64"
                                                height="64"
                                                src="./images/icons/calculator.svg"
                                                alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <footer>
                <div class="container">
                    <p>
                        Challenge by
                        <a
                            href="https://www.frontendmentor.io?ref=challenge"
                            class="btn btn--link"
                            rel="noopener"
                            target="_blank"
                            >Frontend Mentor</a
                        >. Coded by
                        <a
                            href="https://github.com/al3xback"
                            class="btn btn--link"
                            rel="noopener"
                            target="_blank"
                            >al3xback</a
                        >.
                    </p>
                </div>
            </footer>
        </div>
    `;

	return content;
};
