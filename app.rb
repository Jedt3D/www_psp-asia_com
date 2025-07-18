require 'sinatra'

configure do
  enable :static
  set :public_folder, File.dirname(__FILE__) + '/public'
  set :static_cache_control, [:public, max_age: 60 * 60 * 24]
end

get '/' do
  erb :index
end

get '/product' do
  erb :product_main
end

get '/news' do
  erb :news_main
end