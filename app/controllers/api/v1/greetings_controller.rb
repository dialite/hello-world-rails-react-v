class Api::V1::GreetingsController < ApplicationController
  def index
    @greetings = Greeting.all.order('random()').first
    render json: { greeting: @greetings.greeting }
  end
end
