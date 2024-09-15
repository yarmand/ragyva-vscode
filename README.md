# ragyva README

This is the README for your extension "ragyva". After writing up a brief description, we recommend including the following sections.

## Features

Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: Enable/disable this extension.
* `myExtension.thing`: Set to `blah` to do something.

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

---

## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux).
* Toggle preview (`Shift+Cmd+V` on macOS or `Shift+Ctrl+V` on Windows and Linux).
* Press `Ctrl+Space` (Windows, Linux, macOS) to see a list of Markdown snippets.

## For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
# ragyva

my personal take on RAG to manage my personal notes

__disclaimer__: Kudos to @technovangelist for [their rag tutorial](https://github.com/technovangelist/videoprojects/tree/main/2024-04-04-build-rag-with-python) that I used to bootsrtap this repo.

## install and requirements

### devcontainer

lets use the devcontainer, it will install everything and will serve as base for final distribution.

start it with VSCode or run

```
devcontainer up --workspace-folder $(pwd)
```

### ollama

Altertanive 1:
run [ollama](https://ollama.com/) on your machine.

Alternative 2:
run Ollamma in docker-compose
```
docker compose up -d ollama
```

### models

Make sure you have the models listed in config.ini. so for `nomic-embed-text`

```
ollama pull nomic-embed-text
```

Update the config to show whatever models you want to use.
A good small model for chat is `phi3:instruct`

```
ollama pull phi3:instruct
```

## import notes

```
find ./docs -name '*.md' | import.py
```

You can specify the collection name with `--collection-name`
(see details with `import.py -h`)

## chat with notes

```
chat.py
```

# TODO

- look into graphRAG: https://github.com/microsoft/graphrag

## improve import

- ~~only import files that changes since last embedding cycle~~ => store import time as matadatas
- ~~find the right balance of chunk size~~ => use markdown langchain markdown splitter
- ~~user relative path for notes~~
- add significant meta-data
  - note / file the chunk is coming from
  - significant objects found in the chunk
    - dates
    - people
    - tags
- Embed Images
  - describe images
  - extract keywords from diagram
- graphDB associated with notes
  - significant meta-data
  - references from note to notes

## improve chat
- Every chat interaction should not trigger a retrieval. When initial query is done, following interactions do not
  necessarily need more data.
- Analyse the prompt to determine if a retrieval is necessary or not.

## improve retrieval

- ~~print path of note retreived~~
- retreive chunk before and after the return by vector DB
- return full note instead of chuncks as an option
- optimize model temperature on retreival filter
- add layer to filter returned data and eliminate not relevant
- Analyse prompt to distinguish content questions from dataset question (ex: how many documents with ...)

## improve generation

- prompt engineering on template.
  - where to put hte retreived data
  - where to insert the user query
- optimize model temperature on response generation

## Notes Agents

- Allow to perform actions on notes
- Input then organize
  - user to free input of note
  - on save, analyse and propose to organise note following PARA ( Projects, Areas, Resources, Archives)
