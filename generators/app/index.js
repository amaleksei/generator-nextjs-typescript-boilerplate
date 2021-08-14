"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        `Welcome to the remarkable ${chalk.red(
          "generator-nextjs-typescript-boilerplate"
        )} generator!`
      )
    );

    const prompts = [
      {
        type: "confirm",
        name: "someAnswer",
        message: "Would you like to enable this option?",
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath(".gitignore"),
      this.destinationPath(".gitignore")
    );
    this.fs.copy(
      this.templatePath(".prettierrc"),
      this.destinationPath(".prettierrc")
    );
    this.fs.copy(
      this.templatePath(".eslintrc.json"),
      this.destinationPath(".eslintrc.json")
    );
    this.fs.copy(
      this.templatePath("next-env.d.ts"),
      this.destinationPath("next-env.d.ts")
    );
    this.fs.copy(
      this.templatePath("next.config.js"),
      this.destinationPath("next.config.js")
    );
    this.fs.copy(
      this.templatePath("package.json"),
      this.destinationPath("package.json")
    );
    this.fs.copy(
      this.templatePath("README.md"),
      this.destinationPath("README.md")
    );
    this.fs.copy(
      this.templatePath("tsconfig.json"),
      this.destinationPath("tsconfig.json")
    );
    this.fs.copy(
      this.templatePath("yarn.lock"),
      this.destinationPath("yarn.lock")
    );
    this.fs.copy(this.templatePath("pages"), this.destinationPath("pages"));
    this.fs.copy(this.templatePath("public"), this.destinationPath("public"));
    this.fs.copy(this.templatePath("styles"), this.destinationPath("styles"));
  }

  install() {
    this.installDependencies();
  }
};
