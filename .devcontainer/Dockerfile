# FROM mcr.microsoft.com/devcontainers/universal:dev
FROM mcr.microsoft.com/devcontainers/universal:dev

ENV DEBIAN_FRONTEND=noninteractive PIP_PREFER_BINARY=1

# remove buggy microsoft deb list
RUN rm /etc/apt/sources.list.d/microsoft.list

# git credential manager
RUN sudo curl -LO https://github.com/git-ecosystem/git-credential-manager/releases/download/v2.5.0/gcm-linux_amd64.2.5.0.deb && \
  sudo apt install -y  ./gcm-linux_amd64.*.deb && \
  sudo rm gcm-linux_amd64.*.deb

# docker client
RUN apt-get install -y ca-certificates curl && \
    install -m 0755 -d /etc/apt/keyrings && \
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc && \
    chmod a+r /etc/apt/keyrings/docker.asc && \
    echo \
    "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
    $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
    tee /etc/apt/sources.list.d/docker.list > /dev/null && \
    apt-get update && \
    apt install -y docker-ce-cli && \
    chmod +s /usr/bin/docker

# github cli
RUN (type -p wget >/dev/null || (sudo apt update && sudo apt-get install wget -y)) \
    && sudo mkdir -p -m 755 /etc/apt/keyrings \
    && wget -qO- https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo tee /etc/apt/keyrings/githubcli-archive-keyring.gpg > /dev/null \
    && sudo chmod go+r /etc/apt/keyrings/githubcli-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
    && sudo apt update \
    && sudo apt install gh -y

# # Install k6: https://k6.io/docs/get-started/installation/
RUN sudo gpg -k && \
    sudo gpg --no-default-keyring --keyring /usr/share/keyrings/k6-archive-keyring.gpg --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys C5AD17C747E3415A3642D57D77C6C491D6AC1D69 && \
    echo "deb [signed-by=/usr/share/keyrings/k6-archive-keyring.gpg] https://dl.k6.io/deb stable main" | sudo tee /etc/apt/sources.list.d/k6.list && \
    sudo apt update && \
    sudo apt install -y  \
    k6 && \
    sudo npm install --global yarn tslint

# Install azure-cli
RUN pip install azure-cli

# vscode extensions generator
RUN npm install --global yo generator-code

CMD /usr/bin/zsh -c 'while true ; do sleep 1000 ; done'
