# Hello world docker action

This action prints "Hello world" or "Hello" + the name of a person to greet to the log

## Inputs

## `who-to-greet`

**Required** The name of the person to greet. Default `"Hello World"`

## Outputs

## `time`

The time we greeted you

## Example usage

```
uses: actions/hello-world-docker-action@v2
with:
  who-to-greet: 'Mona the octocat'
```