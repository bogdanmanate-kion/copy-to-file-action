# Write environment variables/secret to a file

This action will write environment variables/secret to a file.

## Inputs

## `content`

**Required** The content you want to write to the file.

## `filename`

**Required** The filename you want to write to.

## `work-directory`
**Optional** The directory you want to write to. If not specified, the runner's temp ("RUNNER_TEMP") will  be used.

## Example usage

uses: bogdanmanate-kion/copy-file-to-action@v1.1
with:
content: ${{ secrets.content }}
filename: 'test.secret'
