# Database Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
avatar_url    | string    | default: (url to guest image)
description | string | 

## projects
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
title       | string    | not null
description | string    |
thumbnail_url | string | not null

## images
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
img_url     | string    | not null
caption     | text      |
project_id  | integer   | not null, foreign key (references projects), indexed

## likes
column name | data type | details
------------|-----------|-----------------------
user_id     | integer   | not null, foreign key (references users), indexed
project_id  | integer   | not null, foreign key (references projects), indexed

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null
project_id  | integer   | not null
body        | string    | not null
