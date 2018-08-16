class ReactController < ApplicationController
  layout 'layouts/react_application'

  def index
    render 'react/react_page'
  end

  def new
    render 'react/react_page'
  end

  def edit
    render 'react/react_page'
  end
end
