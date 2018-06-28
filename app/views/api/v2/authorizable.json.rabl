object @resource

if @object.try(:class).try(:ancestors).to_a.include?(Authorizable)
    node(:can_edit) { |resource| resource.authorized?(:"#{:edit}_#{resource.class.name.pluralize.downcase}") } 
    node(:can_delete) {|resource| resource.authorized?(:"#{:delete}_#{resource.class.name.pluralize.downcase}") } 
end
