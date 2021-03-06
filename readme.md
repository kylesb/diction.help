# Diction

A web based software application for cataloging dictionary words, and footnotes.

## About

Mainly a continuing AngularJS and Rails learning experiment, but also used to help learn new vocabulary and information through the indexation of data served from Oxford Dictionary and Wikipedia. The Wikipedia API data provides article summary blurbs with links to the main articles.

## Settings

* Create, save, and share *lists* from a variety of API's (Oxford Dictionary, Wikipedia)
* Get a shareable URL for a list
* Search for multiple words simultaneously through comma separation: "epitome, fallacy, aloof"
* Target specific API's in search using a parameter
  * Wikipedia: "cell biology (w)"
  * Oxford Dictionary: "epitome (d)"
* Various filtering and sorting options

## Architecture

Ruby on Rails 4.2<br>
AngularJS 1.2

## Cloning

To get up and running locally:

> git clone https://github.com/kylesb/diction.help.git<br>
> bundle update<br>
> rake db:migrate<br>
> rails s
