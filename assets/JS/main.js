document.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    const toastContainer = document.getElementById("toastContainer");
    const hamburgerToggle = document.querySelector(".hamburger-toggle");
    const navContainer = document.querySelector(".nav-container");

    const routes = {
        "/": () => `
            <section class="hero">
                <img src="assets/Imgs/painel.jpg" alt="Imagem de voluntários em ação" class="hero-image">
                <h2>Construindo um futuro melhor juntos</h2>
                <p><strong>Conheça nossas ações e ajude a transformar a realidade de muitas pessoas.</strong></p>
                <a href="#/cadastro" class="btn" data-route>Seja um Colaborador</a>
            </section>

            <section class="sobre">
                <h2>Quem Somos</h2>
                <div class="sobre-grid">
                    <article class="sobre-card">
                        <h3>Nossa Missão</h3>
                        <p>Promover a inclusão e a acessibilidade por meio de educação, tecnologia assistiva e apoio comunitário.</p>
                    </article>
                    <article class="sobre-card">
                        <h3>Nosso Impacto</h3>
                        <p>Fortalecer a autonomia de pessoas com deficiência por meio de ações concretas que ampliam oportunidades e promovem dignidade.</p>
                    </article>
                </div>
            </section>

            <section class="impacto">
                <h2>Nosso impacto em números</h2>
                <div class="impacto-grid">
                    <div class="impacto-item">
                        <strong>1.200+</strong>
                        <span>Pessoas atendidas</span>
                    </div>
                    <div class="impacto-item">
                        <strong>28</strong>
                        <span>Voluntários ativos</span>
                    </div>
                    <div class="impacto-item">
                        <strong>45</strong>
                        <span>Projetos apoiados</span>
                    </div>
                    <div class="impacto-item">
                        <strong>96%</strong>
                        <span>Taxa de satisfação</span>
                    </div>
                </div>
            </section>

            <section class="projetos-home">
                <h2>Principais projetos</h2>
                <div class="grid-projetos">
                    <article class="card-projeto">
                        <h3>Educação Comunitária</h3>
                        <p>Aulas de reforço, mentorias e oficinas que ampliam oportunidades para crianças e jovens.</p>
                    </article>
                    <article class="card-projeto">
                        <h3>Acessibilidade Arquitetônica e Urbana</h3>
                        <p>Mapeamento de barreiras físicas, reformas em espaços públicos e consultoria para transformar cidades e edifícios em ambientes seguros e transponíveis para todos.</p>
                    </article>
                    <article class="card-projeto">
                        <h3>Alimentação e Cidadania</h3>
                        <p>Distribuição de cestas básicas e apoio a famílias em situação de vulnerabilidade.</p>
                    </article>
                    <article class="card-projeto">
                        <h3>Tecnologia Assistiva e Inclusão Digital</h3>
                        <p>Oficinas de adaptação de dispositivos, empréstimo de equipamentos e cursos de informática acessível para eliminar barreiras digitais e garantir autonomia no mundo virtual.</p>
                    </article>
                    <article class="card-projeto">
                        <h3>Comunicação Inclusiva e Cidadania</h3>
                        <p>Tradução em Libras, produção de conteúdos em Braille, audiodescrição e capacitação para garantir que a informação e a cultura cheguem a todas as pessoas, independentemente de suas limitações.</p>
                    </article>
                    <article class="card-projeto">
                        <h3>Advocacia e Conscientização</h3>
                        <p>Ações educativas e apoio jurídico para combater o preconceito, promover a cultura da inclusão e defender os direitos garantidos por lei às pessoas com deficiência.</p>
                    </article>
                </div>
            </section>
        `,
        "/projetos": () => `
            <section>
                <h2>Nossos Projetos</h2>
                <div class="grid-projetos">
                    <article class="card-projeto">
                        <h3>Educação Comunitária</h3>
                        <p>Aulas de reforço escolar e oficinas criativas para crianças e jovens da comunidade.</p>
                    </article>
                    <article class="card-projeto">
                        <h3>Sustentabilidade Urbana</h3>
                        <p>Iniciativas voltadas para conscientização ambiental, hortas comunitárias e reciclagem.</p>
                    </article>
                    <article class="card-projeto">
                        <h3>FabLab acessível</h3>
                        <p><strong>O que é:</strong> Laboratório com impressoras 3D para criação de adaptações personalizadas a baixo custo.</p>
                        <p><strong>Por que é essencial:</strong> Transforma a tecnologia assistiva em autonomia ativa, permitindo criar soluções sob medida.</p>
                    </article>
                    <article class="card-projeto">
                        <h3>Academia de Ativismo</h3>
                        <p><strong>O que é:</strong> Formação jurídica e política prática para pessoas com deficiência e familiares.</p>
                        <p><strong>Por que é essencial:</strong> Capacita a comunidade a denunciar violações e acessar direitos.</p>
                    </article>
                    <article class="card-projeto">
                        <h3>Cinema Acessível</h3>
                        <p><strong>O que é:</strong> Sessões mensais com interpretação em Libras, audiodescrição e legendas descritas.</p>
                        <p><strong>Por que é essencial:</strong> Leva cultura e lazer para todas as pessoas, com acesso real ao entretenimento.</p>
                    </article>
                    <article class="card-projeto">
                        <h3>Empreendedorismo com Acessibilidade</h3>
                        <p><strong>O que é:</strong> Programa de incubação de negócios para pessoas com deficiência.</p>
                        <p><strong>Por que é essencial:</strong> Cria renda, autonomia e oportunidades de inovação para a comunidade.</p>
                    </article>
                </div>
            </section>
        `,
        "/cadastro": () => `
            <div class="container-cadastro">
                <div id="formAlert" class="alert alert--info" hidden role="status" aria-live="polite"></div>

                <section>
                    <h2>Faça parte da nossa rede</h2>
                    <p>Preencha o formulário abaixo para se registrar como voluntário ou colaborador.</p>

                    <form id="formCadastro" novalidate>
                        <fieldset>
                            <legend>Dados Pessoais</legend>

                            <div class="form-group">
                                <label for="nome">Nome Completo:</label>
                                <input type="text" id="nome" name="nome" required minlength="3" placeholder="Digite seu nome completo">
                            </div>

                            <div class="form-group">
                                <label for="cpf">CPF:</label>
                                <input type="text" id="cpf" name="cpf" required placeholder="000.000.000-00" maxlength="14">
                            </div>

                            <div class="form-group">
                                <label for="email">E-mail:</label>
                                <input type="email" id="email" name="email" required placeholder="seu@email.com">
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>Contato</legend>

                            <div class="form-group">
                                <label for="telefone">Telefone / WhatsApp:</label>
                                <input type="text" id="telefone" name="telefone" required placeholder="(00) 00000-0000" maxlength="15">
                            </div>
                        </fieldset>

                        <fieldset>
                            <legend>Endereço</legend>

                            <div class="form-group">
                                <label for="cep">CEP:</label>
                                <input type="text" id="cep" name="cep" required placeholder="00000-000" maxlength="9">
                            </div>

                            <div class="form-group">
                                <label for="cidade">Cidade:</label>
                                <input type="text" id="cidade" name="cidade" required placeholder="Digite sua cidade">
                            </div>

                            <div class="form-group">
                                <label for="estado">Estado:</label>
                                <input type="text" id="estado" name="estado" required placeholder="UF" maxlength="2">
                            </div>
                        </fieldset>

                        <button type="submit" class="btn">Cadastrar</button>
                    </form>
                </section>
            </div>
        `
    };

    const setFormAlert = (message, type = "info", formAlert) => {
        if (!formAlert) return;
        formAlert.textContent = message;
        formAlert.className = `alert alert--${type}`;
        formAlert.hidden = false;
        formAlert.setAttribute("role", type === "danger" ? "alert" : "status");
    };

    const dismissFormAlert = (formAlert) => {
        if (!formAlert) return;
        formAlert.hidden = true;
        formAlert.textContent = "";
    };

    const showToast = (message, type = "info", title = "Atenção") => {
        if (!toastContainer) return;

        const icons = { success: "✓", warning: "!", danger: "×", info: "i" };
        const titles = { success: "Sucesso", warning: "Aviso", danger: "Erro", info: "Informação" };

        const toast = document.createElement("div");
        toast.className = `toast toast--${type}`;
        toast.setAttribute("role", type === "danger" ? "alert" : "status");
        toast.setAttribute("aria-live", type === "danger" ? "assertive" : "polite");
        toast.innerHTML = `
            <span class="toast__icon" aria-hidden="true">${icons[type] || "i"}</span>
            <div class="toast__content">
                <strong class="toast__title">${title || titles[type] || "Atenção"}</strong>
                <span>${message}</span>
            </div>
            <button class="toast__close" type="button" aria-label="Fechar mensagem">×</button>
        `;

        toast.querySelector(".toast__close").addEventListener("click", () => toast.remove());

        toastContainer.appendChild(toast);
        requestAnimationFrame(() => toast.classList.add("is-visible"));

        window.setTimeout(() => {
            toast.classList.remove("is-visible");
            window.setTimeout(() => toast.remove(), 250);
        }, 4200);
    };

    const bindFormHandlers = () => {
        const cpfInput = document.getElementById("cpf");
        const telefoneInput = document.getElementById("telefone");
        const cepInput = document.getElementById("cep");
        const form = document.getElementById("formCadastro");
        const formAlert = document.getElementById("formAlert");

        if (cpfInput) {
            cpfInput.addEventListener("input", (e) => {
                let value = e.target.value.replace(/\D/g, "");
                if (value.length > 11) value = value.slice(0, 11);
                value = value.replace(/(\d{3})(\d)/, "$1.$2");
                value = value.replace(/(\d{3})(\d)/, "$1.$2");
                value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
                e.target.value = value;
            });
        }

        if (telefoneInput) {
            telefoneInput.addEventListener("input", (e) => {
                let value = e.target.value.replace(/\D/g, "");
                if (value.length > 11) value = value.slice(0, 11);

                if (value.length > 10) {
                    value = value.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
                } else if (value.length > 5) {
                    value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
                } else if (value.length > 2) {
                    value = value.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
                } else if (value.length > 0) {
                    value = value.replace(/^(\d*)/, "($1");
                }

                e.target.value = value;
            });
        }

        if (cepInput) {
            cepInput.addEventListener("input", (e) => {
                let value = e.target.value.replace(/\D/g, "");
                if (value.length > 8) value = value.slice(0, 8);
                value = value.replace(/(\d{5})(\d)/, "$1-$2");
                e.target.value = value;

                if (value.replace(/\D/g, "").length === 8) {
                    const cepLimpo = value.replace(/\D/g, "");
                    fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
                        .then((response) => response.json())
                        .then((data) => {
                            if (!data.erro) {
                                showToast("CEP validado com sucesso.", "success", "Localização");
                            } else {
                                showToast("CEP não encontrado. Verifique o valor informado.", "warning", "CEP");
                            }
                        })
                        .catch(() => {
                            showToast("Não foi possível consultar o CEP no momento.", "danger", "Erro");
                        });
                }
            });
        }

        if (form) {
            form.addEventListener("submit", (e) => {
                e.preventDefault();

                if (form.checkValidity()) {
                    dismissFormAlert(formAlert);
                    showToast("Cadastro realizado com sucesso! Obrigado por apoiar nossa causa.", "success", "Cadastro");
                    form.reset();
                } else {
                    setFormAlert("Por favor, preencha todos os campos corretamente antes de enviar.", "danger", formAlert);
                    showToast("Preencha todos os campos obrigatórios antes de enviar.", "warning", "Validação");
                    form.reportValidity();
                }
            });
        }
    };

    const updateNavigation = (route) => {
        const normalizedRoute = route || "/";
        const navLinks = document.querySelectorAll("a[data-route]");

        navLinks.forEach((link) => {
            const isActive = link.getAttribute("href") === `#${normalizedRoute}`;
            link.setAttribute("aria-current", isActive ? "page" : "false");
            if (isActive) {
                link.setAttribute("aria-current", "page");
            }
        });
    };

    const renderPage = () => {
        const hash = window.location.hash || "#/";
        const route = hash.startsWith("#") ? hash.slice(1) : hash;
        const normalizedRoute = route && route !== "" ? route : "/";
        const page = routes[normalizedRoute] || routes["/"];

        app.innerHTML = page();
        updateNavigation(normalizedRoute);
        bindFormHandlers();
    };

    const handleRouteClick = (event) => {
        const link = event.target.closest("a[data-route]");
        if (!link) return;

        event.preventDefault();
        const href = link.getAttribute("href");
        if (href) {
            window.location.hash = href;
        }
    };

    document.body.addEventListener("click", handleRouteClick);
    window.addEventListener("hashchange", renderPage);

    if (!window.location.hash) {
        window.location.hash = "#/";
    }

    renderPage();

    if (hamburgerToggle && navContainer) {
        hamburgerToggle.addEventListener("click", () => {
            const isExpanded = hamburgerToggle.getAttribute("aria-expanded") === "true";
            hamburgerToggle.setAttribute("aria-expanded", String(!isExpanded));
            navContainer.classList.toggle("active");
            document.body.style.overflow = isExpanded ? "" : "hidden";
        });

        document.addEventListener("click", (event) => {
            if (!navContainer.contains(event.target) && !hamburgerToggle.contains(event.target)) {
                hamburgerToggle.setAttribute("aria-expanded", "false");
                navContainer.classList.remove("active");
                document.body.style.overflow = "";
            }
        });
    }
});