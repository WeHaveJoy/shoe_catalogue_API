create table brands(
    brand_id serial not null primary key,
    brand_name text not null
)

create table colours(
    colour_id serial not null primary key,
    colour text not null
)

create table sizes(
size_id serial not null primary key,
size int not null
)


