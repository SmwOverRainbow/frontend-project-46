### Hexlet tests and linter status:
[![Actions Status](https://github.com/SmwOverRainbow/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/SmwOverRainbow/frontend-project-46/actions)
[![Test_gendiff](https://github.com/SmwOverRainbow/frontend-project-46/actions/workflows/test.index.yml/badge.svg)](https://github.com/SmwOverRainbow/frontend-project-46/actions/workflows/test.index.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/daac37fde749955f4c93/maintainability)](https://codeclimate.com/github/SmwOverRainbow/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/daac37fde749955f4c93/test_coverage)](https://codeclimate.com/github/SmwOverRainbow/frontend-project-46/test_coverage)



### Install ###

1. Clone repository local
`git clone git@github.com:SmwOverRainbow/frontend-project-46.git`
2. Install all dependencies 
`npm ci`
3. Install  apps global
`npm link`
4. Run app with command:
`gendiff <filepath1>filename1.json <filepath2>filename2.yaml`
    where <filepath> - absolute or relative file path

### Description (RU) ### 

Gendiff - is a program that determines the difference between two data structures. Utility can work with json and yaml/yml files. By default using 'stylish' output format of difference. For another output format, use the flag `-f` or `--format` with next values:
`stylish` - using by default
`plain` - for line-by-line output of the difference
`json`  - for json output of the difference


##### Asciinema: #####

[asciinema plain objects 'stylish' format](https://asciinema.org/a/RgwnBeoPL9SkGkDUzNzZmnMZk)

[asciinema nested objects 'stylish' format](https://asciinema.org/a/mJAV7X2gX5JJMwcSSW29OJMmL)

[asciinema nested objects 'plain' format](https://asciinema.org/a/diFzqghm5vOoGWhuKfXCHflZW)

[asciinema nested objects 'json' format](https://asciinema.org/a/LVbuod0GRnNc6dIB0FOCi7qVt)
